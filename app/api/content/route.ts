const posts = [
	{
		title: "Exploring the Universe",
		slug: "exploring-the-universe",
		content:
			"The vast expanse of the cosmos has always fascinated humanity. From the twinkling stars in the night sky to the enigmatic black holes lurking in the depths of space, there's a wealth of mysteries waiting to be uncovered.",
	},
	{
		title: "The Art of Cooking",
		slug: "the-art-of-cooking",
		content:
			"Cooking is not just about combining ingredients; it's a form of art that engages all the senses. From the sizzle of onions in a hot pan to the aroma of freshly baked bread, every step in the kitchen is an opportunity to create something delicious and memorable.",
	},
	{
		title: "Mindfulness in Daily Life",
		slug: "mindfulness-in-daily-life",
		content:
			"In today's fast-paced world, it's easy to get caught up in the hustle and bustle of everyday life. But practicing mindfulness can help us slow down, appreciate the present moment, and find peace amidst the chaos.",
	},
	{
		title: "The Power of Storytelling",
		slug: "the-power-of-storytelling",
		content:
			"Stories have the ability to transport us to different worlds, evoke deep emotions, and connect us with others on a fundamental level. Whether it's a bedtime tale told to a child or a gripping novel that keeps us up all night, storytelling is a timeless art that enriches our lives.",
	},
	{
		title: "Embracing Change",
		slug: "embracing-change",
		content:
			"Change is inevitable and often challenging, but it's also an essential part of growth and progress. Instead of resisting change, embracing it can lead to new opportunities, personal development, and a greater sense of resilience.",
	},
	{
		title: "The Beauty of Nature",
		slug: "the-beauty-of-nature",
		content:
			"Nature is a source of endless inspiration and wonder. From the majestic mountains to the tranquil lakes, there's something inherently soothing about immersing oneself in the great outdoors. Taking the time to appreciate nature's beauty can rejuvenate the mind, body, and soul.",
	},
];

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {
	const session = await getServerSession();

    return NextResponse.json(posts);
}