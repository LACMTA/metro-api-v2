import os, requests, json, sys, pathlib, timeit
from pathlib import Path
from zipfile import ZipFile
# from clint.textui import progress

# def main(argv):
def main():
    try:
        extract_zip_file()
        # extract_zip_file(argv)
    except Exception as e:
        print(e)

def extract_zip_files(target_dir):

    for file in os.listdir(os.chdir(target_dir)):
        if file.endswith('.zip'):
            filename = Path(file).stem
            with ZipFileWithPercentage(file, 'r') as zip:
                zip.extractall(filename,fn_progress=lambda total, current: print(f'{calculate_percentage(total, current)} %'))

def import_gtfs_data():
    extract_zip_files("../../appdata/gtfs-static")
    count = 0
    home_directory = os.path.expanduser( '~' )
    for content_file in repo_contents:
        response = requests.get(content_file.url)
        response_json = json.loads(response.text)
        file_url = response_json['download_url']
        filename = pathlib.Path(file_url).stem
        outpath = f'./temp/{pathlib.Path(file_url).stem}.zip'
        r = requests.get(file_url, stream = True)
        with open(outpath, "wb") as target_zip:
            total_length = int(r.headers.get('content-length'))
            for ch in progress.bar(r.iter_content(chunk_size = 2391975), expected_size=(total_length/1024) + 1):
                if ch:
                    target_zip.write(ch)
        with ZipFile(outpath, 'r') as zip: 
            path = os.path.join( home_directory, 'www', 'tiles',filename )
            zip.extractall(path)
        print('Deleting extracted zip file')
        os.remove(outpath) 
        count += 1
    
    print('Script complete')
    print(str(count) + ' tile(s) downloaded and extracted.')

class ZipFileWithPercentage(ZipFile):
    """ Custom ZipFile class with a callback on extractall. """

    def extractall(self, path=None, members=None, pwd=None, fn_progress=None):
        if members is None:
            members = self.namelist()

        if path is None:
            path = os.getcwd()
        else:
            path = os.fspath(path)

        for index, member in enumerate(members):
            if fn_progress:
                fn_progress(len(members), index + 1)
            self._extract_member(member, path, pwd)

def calculate_percentage(total: int, current: int):
    percent = float(current) / total
    percent = round(percent * 100)
    return percent


if __name__ == "__main__":
   process_start = timeit.default_timer()
#    main(sys.argv[1:])
   main()
   process_end = timeit.default_timer()
   print('Process took {} seconds'.format(process_end - process_start))