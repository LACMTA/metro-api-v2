import os, ftplib, posixpath,json
import pandas as pd
from pandas.io.json import json_normalize
# from .log_helper import *
from pathlib import Path

ftp_client = None
ftp_server = ''
file_modified_time = None

def connect_to_ftp(remote_dir, server, user, pw):
	global ftp_client 
	global ftp_server
	ftp_server = server
	
	ftp_client = ftplib.FTP(server)
	login_result = ftp_client.login(user, pw)
	
	if '230' in login_result:
		ftp_client.cwd(remote_dir)
		return True
	else:
		return False
	#ftp.retrlines("LIST")

# https://gitlab.com/LACMTA/gtfs_bus/-/raw/weekly-updated-service/calendar_dates.txt

def get_file_from_ftp(file, local_dir):
	global file_modified_time
	for filename in ftp_client.nlst(file): # Loop - looking for matching files
		if filename == file:
			write_path = os.path.join(local_dir,file)
			real_write_path = os.path.realpath(write_path)
			fhandle = open(real_write_path, 'wb')
			transfer_result = ftp_client.retrbinary('RETR ' + filename, fhandle.write)
			if '226' in transfer_result:
				fhandle.close()
				return True
			else:
				fhandle.close()
				return False

def disconnect_from_ftp():
	ftp_client.quit()