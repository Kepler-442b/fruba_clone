from pathlib import Path
import requests
import os

characters =[
    'yuki', 'kyo', 'isuzu', 'shigure', 'momiji', 
    'arisa', 'saki', 'kisa', 'kureno', 'akito', 
    'ayame', 'hatori', 'hiro', 'ritsu', 'kagura', 
    'hatsuharu', 'kazuma', 'kyoko', 'kakeru', 'machi',
]

jyuunijis = [
    'yuki', 'kyo', 'isuzu', 'shigure', 
    'momiji', 'kisa', 'kureno','ayame', 
    'hatori', 'hiro', 'ritsu', 'kagura', 
    'hatsuharu'
]

# Store imgs inside a given folder
def download_image():
    # Change to the main asset directory
    parent_folder = os.path.join(os.getcwd(), 'assets')
    os.chdir(parent_folder)

    # Define sub folders to store each image to
    sub_folders = ['char_switch']

    for c in jyuunijis:
        # Actual link for an image
        link = 'https://fruba.jp' + f"/assets/img/character/{c}/ph_switch.png"

        file_name = f"{c}_ph_switch.jpg"

        os.chdir(os.path.join(os.getcwd(), sub_folders[0]))

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
download_image()
