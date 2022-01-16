import json

def get_data(path):
    with open(path, encoding='utf-8') as fh:
        data = json.load(fh)
        return data

def format(data):
    result = []
    for image in data:
        path = f"./{image['id']}.{image['type']}"
        desc = image["desc"]
        result.append({"image": path,"description": desc})
    return result

data = get_data("../../MediaSources/gui-pack-images-sources.json")

json_data = {
    "guiPack": format(data)
}

with open("gui-pack.json", "w", encoding='utf8') as outfile:
    json.dump(json_data, outfile, ensure_ascii=False)

