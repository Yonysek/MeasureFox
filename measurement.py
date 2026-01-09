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
        return Measurement(float(signal[0]), float(signal[2].replace("\xa0", "").replace("Â", "")))