import { useState } from 'preact/hooks';

// typescript complaining stuff
// define shape of props
interface GreetingProps {
    messages: string[];
}

// type incoming proprs using interface
export default function Greeting({messages}: GreetingProps) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thank you for visiting my blog!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    );
}