import tkinter
from tkinter import ttk
from tkinter.filedialog import askopenfilename
from report import Report

class ConfigUI:
    root: tkinter.Tk
    frame: ttk.Frame
    path: tkinter.StringVar
    legend: tkinter.IntVar

    def __init__(self):
        self.root = tkinter.Tk()
        self.frame = ttk.Frame(self.root, padding=10)
        self.path = tkinter.StringVar()
        self.legend = tkinter.IntVar()
    
    def run(self):
        self.frame.grid()
        ttk.Entry(self.frame, textvariable = self.path).grid(column=0, row=0)
        ttk.Button(self.frame, text = "Select data file", command = self._select_file).grid(column=1,row=0)
        ttk.Checkbutton(self.frame, text = "Legend", variable = self.legend).grid(column=0, row=1)
        ttk.Button(self.frame, text = "Run", command=self._generate).grid(row=2, columnspan=2)
        self.root.mainloop()

    def _select_file(self):
        path = askopenfilename(parent=self.root, title="Select chromatography data export", filetypes=[("Chromatography data export", ".txt")])
        self.path.set(path)

    def _generate(self):
        with open(self.path.get(), "rt") as f:
            report = Report.parse(f.read())
        print(report)
        report.plot(self.legend.get()==1)
