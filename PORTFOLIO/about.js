/** @format */

import Sun from "./sunbeam.jpeg";
import Van from "./van.jpeg";
import IET from "./iet.jpeg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

//  import Gradu from "./gradu.png";

export default function Edu() {
	const Ref = useRef();

	useEffect(() => {
		const imgItems = Ref.current.querySelectorAll("img");
		const paraItems = Ref.current.querySelectorAll("#para");

		gsap.fromTo(
			imgItems,
			{ y: -172 },
			{ y: 0, duration: 2, stagger: 0.1, delay: 1, ease: "expo.out" }
		);
		gsap.fromTo(
			paraItems,
			{ x: 800 },
			{ x: 0, duration: 2, stagger: 0.1, delay: 1, ease: "expo.out" }
		);
	}, []);
	return (
		<div
			id="main"
			ref={Ref}
			className=" flex-rows  flex-wrap mt-10 h-auto  p-5  ">
			<div
				className="  mt-10   p-5  overflow-hidden bg-gradient-to-r from-zinc-950 to-zinc-800 w-full"
				id="About">
				<h1 className="text-6xl font-sans text-cyan-400 text-center mb-8 pt-10">
					About
				</h1>

				<div className="   flex flex-col md:flex-row justify-center  items-center  gap-0   ">
					<div className="flex-shrink-0  flex justify-center  items-center overflow-hidden w-52 ">
						<img
							src={Sun}
							alt="10th Standard"
							className=" shadow-lg  w-32 h-32 rounded-full  hover:scale-110 "
						/>
					</div>
					<div
						id="para"
						className="bg-zinc-900 rounded-xl mr-16 p-4 w-full md:w-2/6 text-white shadow-md">
						High School
						<br />
						Sunbeam School Deoria,Uttar Pradesh,India
						<br />
						Central Board of Secondry Education
					</div>
				</div>

				<div className=" mt-10 flex flex-col md:flex-row   justify-center items-center  gap-0 ">
					<div className="flex-shrink-0 flex justify-center  items-center overflow-hidden w-52">
						<img
							src={Van}
							alt="12th Standard"
							className="h-32 w-32 rounded-full shadow-lg  hover:scale-110"
						/>
					</div>
					<div
						id="para"
						className="bg-zinc-900 rounded-xl   -mt-3  mr-16 p-4 w-full md:w-2/6 text-white shadow-md ">
						Intermediate
						<br />
						Sunbeam School Deoria,Uttar Pradesh,India
						<br />
						Central Board of Secondry Education
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-center  gap-0 mb-0 mt-5 ">
					<div className="flex-shrink-0 flex justify-center  items-center overflow-hidden   w-52">
						<img
							src={IET}
							alt="Graduation"
							className="h-32 w-32 rounded-full  shadow-xl   hover:scale-110"
						/>
					</div>

					<div
						id="para"
						className="bg-zinc-900 rounded-xl   p-4 mr-16 w-full md:w-2/6 text-white shadow-md mt-10 md:mt-0">
						Graduation
						<br />
						Institute of Engineering and Technology,Lucknow,
						<br />
						Electronis and Communication Engineering
						<br />
						Uttar Pradesh,India
					</div>
				</div>
			</div>
		</div>
	);
}
