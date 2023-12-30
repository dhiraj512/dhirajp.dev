'use client'

import { useEffect } from "react";
import tocbot from "tocbot";

export default function Toc({ className }: { className?: string }) {
    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc", // Where to render the table of contents.
            contentSelector: ".toc-content", // Where to grab the headings to build the table of contents.
            headingSelector: "h2, h3", // Which headings to grab inside of the contentSelector element.
            listClass: "font-medium text-muted-foreground", // Each generated list item will get this class.
            listItemClass: "my-2",
            activeLinkClass: "text-blue-500", // The class that is added when an item is active.
            orderedList: true, //  If list is ordered.
            isCollapsedClass: "hidden", // The class used to hide the pagination.
            collapsibleClass: "ml-4 ", // The class of the pagination container.
            collapseDepth: 0, // How many heading levels should not be collapsed.
        });
        return () => tocbot.destroy();
    }, []);

    return (
        <div className="toc"></div>
    );
}