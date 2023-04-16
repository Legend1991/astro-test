import { useState } from 'react';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="grid grid-cols-3 mt-2 center place-items-center text-3xl">
				<button onClick={subtract}>-</button>
				<pre className="c-purple-4">{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="text-center text-2xl">{children}</div>
		</>
	);
}
