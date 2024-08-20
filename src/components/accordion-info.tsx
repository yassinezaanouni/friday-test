"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ACCORDION_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

type AccordionInfoProps = {
  className?: string;
};

const AccordionInfo: React.FC<AccordionInfoProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={cn("lg:flex-row flex flex-col flex-wrap gap-10", className)}
    >
      <Accordion
        type="single"
        className="flex-1"
        defaultValue={ACCORDION_DATA[0].id}
      >
        {ACCORDION_DATA.map((item, index) => (
          <AccordionItemComponent
            key={item.id}
            activeIndex={activeIndex}
            handleClick={() => setActiveIndex(index)}
            index={index}
          />
        ))}
      </Accordion>

      <motion.div
        className="flex-1 min-h-[400px]"
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={ACCORDION_DATA[activeIndex].src}
          width={600}
          height={600}
          alt={ACCORDION_DATA[activeIndex].alt}
          className="object-cover object-left-top rounded-lg"
        />
      </motion.div>
    </div>
  );
};

type AccordionItemComponentProps = {
  activeIndex: number;
  handleClick: () => void;
  index: number;
};

const AccordionItemComponent: React.FC<AccordionItemComponentProps> = ({
  activeIndex,
  handleClick,
  index,
}) => {
  return (
    <AccordionItem value={ACCORDION_DATA[index].id} className="py-4">
      <AccordionTrigger
        onClick={handleClick}
        className={cn("text-xl font-semibold", {
          "text-primary": activeIndex === index,
          "hover:text-primary": activeIndex !== index,
        })}
      >
        {ACCORDION_DATA[index].triggerText}
      </AccordionTrigger>
      <AccordionContent className="opacity-70 text-base">
        {ACCORDION_DATA[index].contentText}
      </AccordionContent>
    </AccordionItem>
  );
};

export { AccordionInfo };
