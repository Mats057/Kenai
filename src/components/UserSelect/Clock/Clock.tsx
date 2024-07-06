import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="hidden text-4xl select-none xl:flex">{time.toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric', hour12: true})}</p>
    </>
  );
}

export default Clock;