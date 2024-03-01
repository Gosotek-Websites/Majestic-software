"use client";

import React from "react";
import styles from "./video.module.css";
import ReactPlayer from "react-player/lazy";

const VideoList = [
	{
		link: "https://youtu.be/CKtzdjHP7Zk",
		title: "HP Spectre x360 - Reinventing the Laptop",
	},
	{
		link: "https://youtu.be/U_ZCASl4r5c",
		title: "Dell XPS 15 2-in-1 (2018) Product Overview",
	},
	{
		link: "https://youtu.be/pzrW5KZ8XAw",
		title: "MacBook Air — Lightness — Apple",
	},
	{
		link: "https://cdn.musebycl.io/2018-11/video/Holiday%20%E2%80%94%20How%20I%20Create%20Stories%20with%20Color%20on%20MacBook%20Pro%20%E2%80%94%20Apple.mp4",
		title: "Holiday — How I Create Stories with Color on MacBook Pro — Apple",
	},
];

const Video = () => {
	return (
		<div className={styles.container}>
			<div className={styles.head}>Videos</div>
			<div className={styles.videoWrapper}>
				{VideoList.map((item, index) => (
					<div className={styles.video}>
						<ReactPlayer
							className={styles.reactPlayer}
							key={index}
							url={item.link}
							controls={true}
							width="100%"
							height="auto"
						/>
						<p>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Video;
