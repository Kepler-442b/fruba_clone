from bs4 import BeautifulSoup
from pathlib import Path
import requests
import os
from get_url import get_url

def download_svg(urls):
    # Change to the main asset directory
    parent_folder = os.path.join(os.getcwd(), 'assets')
    os.chdir(parent_folder)

    # Define sub folders to store each image to
    sub_folders = ['char_names', 'char_others']

    # Loop through urls and save svg files
    for url in urls:
        # Define which request to make to the url
        r = requests.get(url)

        # Define soup. In this case, bs works as a html parser
        soup = BeautifulSoup(r.text, 'html.parser')

        # Get img tags
        images = soup.find_all('img')
        
        # Loop through image tags and save images to the right folder
        for img in images:
            if "svg" in str(img):
                # Actual link for an image
                link = 'https://fruba.jp' + img['src']
                
                # Make another request to the image's page and parse its html
                r2 = requests.get(link)
                icon = BeautifulSoup(r2.text, 'html.parser')
                

                # Determine the names of the icons to save
                name_parser = link.split("/")
                header = name_parser[-2]
                detail = name_parser[-1].split(".")[0]
                file_name = f"{header}_{detail}.svg"

                if "name" in file_name:
                    os.chdir(os.path.join(os.getcwd(), sub_folders[0]))
                else:
                    os.chdir(os.path.join(os.getcwd(), sub_folders[1]))

                # Only save the icons that haven't been saved
                if not os.path.isfile(file_name):
                    with open(file_name, 'w') as f:
                        f.write(str(icon.contents[0]))
                        print("Writing...")
                else:
                    print("This file has already been saved.")

            # Reset OS path to /assets for next loop
            if not os.getcwd() == parent_folder:
                os.chdir(parent_folder)

# exexcute
download_svg(get_url())