from bs4 import BeautifulSoup
from pathlib import Path
import requests
import os
from get_url import get_url

# Store imgs inside a given folder
def download_image(urls):
    # Change to the main asset directory
    parent_folder = os.path.join(os.getcwd(), 'assets')
    os.chdir(parent_folder)

    # Define sub folders to store each image to
    sub_folders = ['char_full_body', 'char_main_faces', 'char_thumbs', 'char_animals']

    # Loop through urls and save images
    for url in urls:
        # Define which request to make to the url
        r = requests.get(url)

        # Define soup. In this case, bs works as a html parser
        soup = BeautifulSoup(r.text, 'html.parser')

        # Get img tags
        images = soup.find_all('img')

        # Loop through image tags and save images to the right folder
        for img in images:
            # Actual link for an image
            link = 'https://fruba.jp' + img['src']

            # Parse link and define the name of each file to be saved
            name_parser = link.split("/")
            header = name_parser[-2]
            detail = name_parser[-1].split(".")[0]
            file_name = f"{header}_{detail}.jpg"

            # Change sub_folders depending on the name of the images
            if "chara" in file_name:
                os.chdir(os.path.join(os.getcwd(), sub_folders[0]))
            elif "face" in file_name:
                os.chdir(os.path.join(os.getcwd(), sub_folders[1]))
            elif "thumb" in file_name:
                os.chdir(os.path.join(os.getcwd(), sub_folders[2]))
            elif "animal" in file_name:
                os.chdir(os.path.join(os.getcwd(), sub_folders[3]))
            else:
                pass

            # Only save the images that haven't been saved
            if not os.path.isfile(file_name):
                with open(file_name, 'wb') as f:
                    im = requests.get(link)
                    f.write(im.content)
                    print("Writing ", file_name)
            else:
                print("This file has already been saved.")

            # Reset OS path to /assets for next loop
            if not os.getcwd() == parent_folder:
                os.chdir(parent_folder)

# execute
download_image(get_url())


'''
1.To create a new folder with the name folder:
    try:
        os.mkdir(os.path.join(os.getcwd(), folder))
    except: 
        pass # Better error handling
'''