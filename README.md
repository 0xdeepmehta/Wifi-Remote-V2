# Wifi Remote V2
*Author: @vivekascoder*\
**For anything you guys can contact me `vivekascoder@gmail.com`*\

<img src="https://raw.githubusercontent.com/vivekascoder/Wifi-Remote-V2/master/Screenshot_20200712_225124.jpg" width="150" />


## How TO Use It
- Firstly, clone the whole reository with the following command.
  - `git clone https://github.com/vivekascoder/Wifi-Remote-V2`
- Then create the virtual enviroment with.
  - `python3 -m venv env`
- Now, Its's time to activate the virtual enviroment
  - `source ./env/bin/activate`
- Then install the necessaary modules with
  - `pip install -r ./requirements.txt`

- Now, check you local ip address with.
  - `sudo ifconfig ` in linux.
  - `ipconfig` in windows.
- Once you got it, then replace it in the `server.py` and `client.js` file.
- Then run the python server in current directory with.
  - `python -m http.server`
- Now open up a new terminal and run the following command.
  - `python ./server.py`
- Everything is set up, now take your phone and type the following address and replace the `ip-addr` with your local ip.
- Open Chrome or any browser and type `http://ip-addr:8000`
- You're done now, enjoy it and suggest changes.
