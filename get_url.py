# Get url by character
def get_url():
    # Define the url
    main_url = ('https://fruba.jp/character/')

    # Define lint of characters (tohru excluded)
    characters = [
        'kyo', 'yuki', 'isuzu', 'shigure', 'momiji', 
        'arisa', 'saki', 'kisa', 'kureno', 'akito', 
        'ayame', 'hatori', 'hiro', 'ritsu', 'kagura', 
        'hatsuharu', 'kazuma', 'kyoko', 'kakeru', 'machi'
    ]

    character_urls = []
    for char in characters:
        character_urls.append(f"{main_url}{char}.php")
    return character_urls
