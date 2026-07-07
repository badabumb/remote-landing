import time
import random
import pyperclip
import pyautogui

START_DELAY = 5
MIN_DELAY = 0.02
MAX_DELAY = 0.06

text = pyperclip.paste()

if not text.strip():
    print("Ошибка: буфер обмена пустой.")
    raise SystemExit

print(f"Скрипт начнет печатать через {START_DELAY} секунд. Переключись в LinkedIn.")
time.sleep(START_DELAY)

for char in text:
    pyautogui.write(char)
    time.sleep(random.uniform(MIN_DELAY, MAX_DELAY))

print("Готово.")
