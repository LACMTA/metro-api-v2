import os

try:
    current_environment = os.environ.get('RUNNING_ENV')
    if current_environment != 'prod':
        from secrets import load_secrets
        load_secrets()
except ModuleNotFoundError:
    pass

def set_db_schema():
    try:
        current_environment = os.environ.get('RUNNING_ENV')
        if current_environment == 'prod':
            return 'metro_api'
        else:
            return 'metro_api_dev'
    except Exception as e:
        print('Error setting db schema: ' + str(e))
        
class Config:
    BASE_URL = "https://api.metro.net"
    TARGET_DB_SCHEMA = set_db_schema()
    DB_URI = os.environ.get('URI')
    SECRET_KEY = os.environ.get('HASH_KEY')
    ALGORITHM = os.environ.get('HASHING_ALGORITHM')
    ACCESS_TOKEN_EXPIRE_MINUTES  = 30
    SWIFTLY_AUTH_KEY_BUS = os.environ.get('SWIFTLY_AUTH_KEY_BUS')
    SWIFTLY_AUTH_KEY_RAIL = os.environ.get('SWIFTLY_AUTH_KEY_RAIL')
    SERVER = os.environ.get('FTP_SERVER')
    USERNAME = os.environ.get('FTP_USERNAME')
    ENVIRONMENT = os.environ.get('FTP_USERNAME')
    PASS = os.environ.get('FTP_PASS')
    REMOTEPATH = '/nextbus/prod/'
    DEBUG = True
    REPODIR = "/gtfs_rail"
    CURRENT_VERSION = "2.1.24"
    # API_LAST_UPDATE_TIME = os.path.getmtime(r'main.py')
    LOGZIO_TOKEN = os.environ.get('LOGZIO_TOKEN')
    LOGZIO_URL = os.environ.get('LOGZIO_URL')
    RUNNING_ENV = os.environ.get('RUNNING_ENV')
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    MAIL_FROM = os.environ.get('MAIL_FROM')
    MAIL_PORT = os.environ.get('MAIL_PORT')
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_TLS = "True"
    MAIL_SSL = "False"
    USE_CREDENTIALS = "True"
    VALIDATE_CERTS = "True"