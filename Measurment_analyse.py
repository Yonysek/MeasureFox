import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import tkinter
from tkinter import ttk
from tkinter.filedialog import askopenfilename

class Measurement:
    """
    Measurment of a signal. Split into Time and Value.
    """
    time: float
    value: float

    def __init__(self, time: float, value: float):
        self.time=time
        self.value=value

    def __repr__(self):
        return f"Measurement({self.time}, {self.value})"
    
    @staticmethod
    def parse(line: str):
        signal = line.split("\t")
        return Measurement(float(signal[0]), float(signal[2].replace("\xa0", "")))

class Report:
    """
    Data gathered from the file. Includes all measurments, injection name, injection number, channel/detector used and the signal unit.
    """
    measurements: list[Measurement]
    injection: str
    injection_number: int
    channel: str
    signal_unit: str

    def __init__(self, measurements: list[Measurement], injection: str, injection_number: int, channel: str, signal_unit: str):
        self.measurements=measurements
        self.injection=injection
        self.injection_number=injection_number
        self.channel=channel
        self.signal_unit=signal_unit

    def __repr__(self):
        return f"Report({self.measurements}, '{self.injection}', {self.injection_number}, '{self.channel}', '{self.signal_unit}')"
    
    @staticmethod
    def parse(file: str):
        flag = False
        measurments=[]
        for line in file.split("\n"):

            if flag:
                if len(line.strip()) == 0:
                    continue

                measurments.append(Measurement.parse(line))
                continue

            if "Channel\t" in line:
                channel=line.split("\t")[-1].strip()

            elif "Injection Number\t" in line:
                injection_number=int(line.split("\t")[-1])

            elif "Injection\t" in line:
                injection=line.split("\t")[-1].strip()
            
            elif "Signal Unit\t" in line:
                signal_unit=line.split("\t")[-1].strip()

            elif "Time (min)\t" in line:
                flag = True

        return Report(measurments, injection, injection_number, channel, signal_unit) # type: ignore

    def plot(self, legend: bool):
        y=[m.value for m in self.measurements]
        x=[m.time for m in self.measurements]

#Generation of the graph

        plt.plot(x, y)
        plt.xlabel("Time (min)")
        plt.ylabel(f"Signal ({self.signal_unit})")
        plt.ylim(bottom=-500)
        plt.yticks(np.arange(-500, max(y)+500, 500))
        plt.xticks(np.arange(0, max(x), 0.5))
        
        if legend:
            plt.legend([f"Injection: {self.injection}\nNumber: #{self.injection_number}\nDetector: {self.channel}"])

        plt.minorticks_on()
        plt.show()

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

matplotlib.use("macosx")
ConfigUI().run()
