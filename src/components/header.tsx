"use client";

import { cn } from "~/lib/utils";
import { useScroll } from "~/hooks/use-scroll";

export default function Header() {
	const scrolled = useScroll();

	return (
		<header
			className={cn(
				"py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-50",
				scrolled &&
					"bg-background/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm",
			)}
		>
			{/* Header vuoto - gli elementi sono stati rimossi */}
			<div></div>
		</header>
	);
}