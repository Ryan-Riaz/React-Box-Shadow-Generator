import React, { useState } from "react";

const BoxShadow = () => {
	const [Hr, setHr] = useState(5);
	const [Vr, setVr] = useState(10);
	const [Blur, setBlur] = useState(5);
	const [Color, setColor] = useState("#a0a0a2");
	const [Check, setCheck] = useState(false);
	return (
		<>
			<div className="controller">
				<div className="range-field">
					<label htmlFor="hr">Horizontal Length</label>
					<input
						value={Hr}
						onChange={(e) => setHr(e.target.value)}
						type="range"
						min="-200"
						max="200"
					/>
				</div>
				<div className="range-field">
					<label htmlFor="vr">Vertical Length</label>
					<input
						value={Vr}
						onChange={(e) => setVr(e.target.value)}
						type="range"
						min="-200"
						max="200"
					/>
				</div>
				<div className="range-field">
					<label htmlFor="blur">Blur</label>
					<input
						value={Blur}
						onChange={(e) => setBlur(e.target.value)}
						type="range"
						min="0"
						max="300"
					/>
				</div>
				<div className="range-field">
					<label htmlFor="color">Color</label>
					<input
						value={Color}
						onChange={(e) => setColor(e.target.value)}
						type="color"
					/>
				</div>
				<div className="switch">
					<label>
						Outline
						<input
							checked={Check}
							onChange={(e) => setCheck(!Check)}
							type="checkbox"
						/>
						<span className="lever"></span>
						Inset
					</label>
				</div>
			</div>
			<div className="output">
				<div
					className="box"
					style={{
						boxShadow: `${
							Check ? "inset" : ""
						} ${Hr}px ${Vr}px ${Blur}px ${Color}`,
					}}
				>
					<p className="textShadow">
						box-shadow:
						{`${
							Check ? " inset" : ""
						} ${Hr}px ${Vr}px ${Blur}px ${Color}`}
						;
					</p>
				</div>
			</div>
		</>
	);
};

export default BoxShadow;
