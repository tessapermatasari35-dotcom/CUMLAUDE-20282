import tkinter as tk
import webview
w = tk.Tk()
w.title('Multiweb View Sampel')
menu = tk.Menu()
menu.add("command",command=lambda:web1(),label="Web 1")
menu.add("command",command=lambda:web2(),label="Web 2")
w.configure(menu=menu)
def web1():
    webview.create_window("Web 1","http://127.0.0.1:5500/index.html")
    webview.start()
def web2():
    webview.create_window("Web 2","video.mp4")
    webview.start()
w.mainloop()