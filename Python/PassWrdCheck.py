
pwd = "Adnjkj@134"
valid = False

if 6 <= len(pwd) <= 30:
  if "A" <= pwd[0] <= "Z":
    if not ( "/" in pwd or "=" in pwd or " " in pwd ):
            valid = True

print(valid)