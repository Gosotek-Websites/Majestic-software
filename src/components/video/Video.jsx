"use client";

import React from "react";
import styles from "./video.module.css";
import ReactPlayer from "react-player/lazy";

const VideoList = [
	{ link: "https://youtu.be/dQw4w9WgXcQ", title: "Video 1" },
	{ link: "https://youtu.be/dQw4w9WgXcQ", title: "Video 2" },
	{ link: "https://youtu.be/dQw4w9WgXcQ", title: "Video 3" },
	{ link: "https://youtu.be/dQw4w9WgXcQ", title: "Video 4" },
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
