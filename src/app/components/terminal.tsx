import { useEffect, useState } from 'react';

const TerminalComponent = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      const loadTerminal = async () => {
        const Xterm = await import('@xterm/xterm');
        const term = new Xterm.Terminal();
        term.open(document.getElementById('terminal')!);
        term.write('Hello from ethernaut-cwdwdewewli $ ');
      };

      loadTerminal();
      setIsInitialized(true);
    }
  }, [isInitialized]);

  return <div id="terminal" className="w-full h-full"></div>;
};

export default TerminalComponent;
