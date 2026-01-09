from measurement import Measurement
import matplotlib.pyplot as plt
import numpy as np

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