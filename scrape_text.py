from bs4 import BeautifulSoup
from pathlib import Path
import requests
import os
from get_url import get_url

# Store paras inside a given folder
def get_character_text(urls):
    # Change to the main asset directory
    parent_folder = os.path.join(os.getcwd(), 'assets')
    os.chdir(parent_folder)

    # Loop through urls and save images
    for url in urls:
        # Define which request to make to the url
        r = requests.get(url)

        # Define soup. In this case, bs works as a html parser
        soup = BeautifulSoup(r.text, 'html.parser')

        # Get p tags
        paragraphs = soup.find_all('p')



        # Loop through image tags and save images to the right folder
        for para in paragraphs:
         
            

            # Parse link and define the name of each file to be saved
            name_parser = url.split("/")
            detail = name_parser[-1].split(".")[0]
            file_name = f"character_intro_{detail}.txt"


            para.contents[0].replace("\r","")
            para.contents[0].replace("\n","")
            para.contents[0].strip()

            print(para.contents[0])

            # Only save the images that haven't been saved
            if not os.path.isfile(file_name):
                with open(file_name, 'w') as f:
                    f.write(para.contents[0])
                    print("Writing ", file_name)
            else:
                print("This file has already been saved.")

            # Reset OS path to /assets for next loop
            if not os.getcwd() == parent_folder:
                os.chdir(parent_folder)

# execute
get_character_text(get_url())


'''
1.To create a new folder with the name folder:
    try:
        os.mkdir(os.path.join(os.getcwd(), folder))
    except: 
        pass # Better error handling
'''