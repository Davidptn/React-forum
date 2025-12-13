import { useState, useEffect } from "react";

export interface ITag {
	id: number;
	title: string;
}

export interface Post {
	id: number;
	title: string;
	shortDescription: string;
	image: string;
	tags: number[];
	likes: number;
}

export const tags: ITag[] = [
	{ id: 1, title: "JavaScript" },
    { id: 2, title: "Python" },
	{ id: 3, title: "C#" },
	{ id: 4, title: "Git" },
	{ id: 5, title: "C++" },
    {id: 6, title: "Memes"}
];

export const posts: Post[] = [
    {
        id: 1,
        title: "Penguins",
        shortDescription: "nice meme",
        image: "https://pk.ign.com/the-penguins-of-madagascar/230886/review/the-penguins-of-madagascar-review",
        tags: [1],
        likes: 150,
    },
];