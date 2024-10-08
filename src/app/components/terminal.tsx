import '@xterm/xterm/css/xterm.css';

import { useEffect, useState } from 'react';

import { Terminal } from '@xterm/xterm';

const TerminalComponent = () => {
  const [term, setTerm] = useState<Terminal | null>(null);
  const [input, setInput] = useState('');
  const prompt = 'ethernaut $ ';

  useEffect(() => {
    if (!term) {
      const initializeTerminal = async () => {
        const terminalInstance = new Terminal();
        terminalInstance.open(document.getElementById('terminal')!);

        terminalInstance.write('Welcome to the Ethernaut Web CLI!\r\n\n');
        terminalInstance.write(prompt);

        terminalInstance.onData(data => handleInput(data, terminalInstance));
        setTerm(terminalInstance);
      };

      initializeTerminal();
    }
  }, [term]);

  const handleInput = (data: string, terminalInstance: Terminal) => {
    const charCode = data.charCodeAt(0);

    if (charCode === 13) {
      terminalInstance.write('\r\n');
      terminalInstance.write(prompt);
      setInput('');
    } else if (charCode === 127) {
      if (input.length > 0) {
        terminalInstance.write('\b \b');
        setInput(input.slice(0, -1));
      }
    } else {
      setInput(input + data);
      terminalInstance.write(data);
    }
  };

  return <div id="terminal" className="w-full h-full"></div>;
};

export default TerminalComponent;
