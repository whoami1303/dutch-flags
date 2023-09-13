def give_colors(input: str):
    n = 2
    return input.split("#")

results = []
value = give_colors("#2c2c7crgb(44,44,124)#302c7crgb(48,44,124)")
value.pop(0)

for object in value:
    results.append({"value": "#" + object[:6], "rgb": object[6:], "primary": 'true'}  )


for result in results: 
    print(str(result) + ",")