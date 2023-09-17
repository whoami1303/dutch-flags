def give_colors(input: str):
    n = 2
    return input.split("#")

results = []
value = give_colors("#fbdc0crgb(251,220,12)#96b91argb(150,185,26)")
value.pop(0)

for object in value:
    results.append({"value": "#" + object[:6], "rgb": object[6:]}  )


for result in results: 
    print(str(result) + ",")