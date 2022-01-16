import json
import urllib.request
import os

def get_data(path):
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
        return data

def format(data, folder_name):
    result = []
    for image in data:
        path = f"./{folder_name}/{image['id']}.{image['type']}"
        desc = image["desc"]
        result.append({"image": path,"description": desc})
    return result

ps_data = get_data("../../MediaSources/gallery-photoshop-sources.json")
rust_data = get_data("../../MediaSources/gallery-rust-sources.json")
ss_data = get_data("../../MediaSources/gallery-screenshots-sources.json")
gp_data = get_data("../../MediaSources/gui-pack-images-sources.json")

json_data = {
    "photoshop": format(ps_data, "photoshop"),
    "rust": format(rust_data, "rust"),
    "screenshots": format(ss_data, "screenshots"),
    "guiPack": format(gp_data, "gui-pack"),
    
}

with open("gallery-images.json", "w", encoding='utf8') as outfile:
    json.dump(json_data, outfile, ensure_ascii=False)

