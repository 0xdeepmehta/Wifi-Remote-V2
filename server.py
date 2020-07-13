#!/usr/bin/env python
"""
Name: Wifi Remote V2.0 Server
Version: 2.0.0
Author: @vivekascoder
Mail: vivekascoder@gmail.com
Date: 12 July 2020
Time: 11:25 PM
"""

import asyncio
import websockets
import time
import pyautogui
import os

async def server(websocket, path):
    while True:
        message = await websocket.recv()
        print("[WIFI_REMOTE_V2]: SERVER => COMMAND: %s : Recieved." % (message))
        if message == "close_window":
            pyautogui.hotkey('alt', 'f4')
        elif message == "press_tab":
            pyautogui.hotkey('tab')
        elif message == "press_enter":
            pyautogui.hotkey('enter')
        elif message == "play":
            pyautogui.hotkey('space')
        elif message == "volume_up":
            pyautogui.hotkey('+')                               
        elif message == "volume_down":
            pyautogui.hotkey('-')                       
        elif message == "open_terminal":
            pyautogui.hotkey('ctrl', 'alt', 't')
        elif message == "open_firefox":
            os.system('firefox &')
        elif message == "log_out":
            os.system('xfce4-session-logout &')
        elif message == "arrow_up":
            pyautogui.press('up')
        elif message == "arrow_down":
            pyautogui.press('down')
        elif message == "arrow_left":
            pyautogui.press('left')
        elif message == "arrow_right":
            pyautogui.press('right')
        else:
            pyautogui.typewrite(message)

start_server = websockets.serve(server, '192.168.43.188', 5678)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
