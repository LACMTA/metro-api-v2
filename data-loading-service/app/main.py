from config import Config
import update_canceled_trips as update_canceled_trips
import utils.gtfs_rt_helper as gtfs_rt_helper
import utils.gtfs_static_helper as gtfs_static_helper
import utils.gopass_helper as gopass_helper
import utils.main_helper as main_helper
import threading
import time
import pandas as pd

import crython
import asyncio

lock = threading.Lock()

def retry_on_failure(task, retries=5, delay=15):
    for i in range(retries):
        try:
            task()
            return  # If the task succeeds, return immediately
        except Exception as e:
            print(f'Error on attempt {i+1}: {str(e)}')
            time.sleep(delay)
    raise Exception('Task failed after all retries')  # If all retries fail, raise an exception

# @crython.job(second='*/15')
# def gtfs_rt_scheduler():
#     if not lock.locked():
#         with lock:
#             asyncio.run(retry_on_failure(gtfs_rt_helper.update_gtfs_realtime_data))

@crython.job(expr='@daily')
def go_pass_data_scheduler():
    try:
        gopass_helper.update_go_pass_data()
    except Exception as e:
        print('Error updating Go Pass data ' + str(e))

@crython.job(expr='* */15 * * * * *')
def canceled_trips_update_scheduler():
    try:
        update_canceled_trips.run_update()
    except Exception as e:
        print('Error updating canceled trips: ' + str(e))

# @crython.job(expr='@weekly')
# def calendar_dates_update_scheduler():
#     try:
#         gtfs_static_helper.update_calendar_dates()
#     except Exception as e:
#         print('Error updating calendar dates: ' + str(e))
        
def initial_load():
    gopass_helper.update_go_pass_data()
    update_canceled_trips.run_update()
    gtfs_rt_helper.update_gtfs_realtime_data()
    gtfs_static_helper.update_calendar_dates()


if __name__ == '__main__':
    initial_load()
    crython.start()
    crython.join()
