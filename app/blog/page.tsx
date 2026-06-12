"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";

export default function BlogPage() {
  const Post = ({
    title,
    date,
    description,
  }: {
    title: string;
    date: Date;
    description: string;
  }) => {
    return (
      <Card
        isHoverable
        isPressable
        className="p-4 w-full"
        onPress={() => {
          addToast({
            title: "Hey!",
            description:
              "🤓☝️",
            color: "danger",
            
          });
        }}
      >
        <CardHeader className="flex justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="text-sm text-default-500">
            {date.toLocaleDateString()}
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-600">{description}</p>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h1 className={title()}>Why you should to web design 🫵</h1>
      <div className="mt-20 flex flex-col gap-6">
        <Post
          date={new Date("6/12/2026")}
          description="The class is not to extreme and there is plenty of help in case you need it "
          title="Reason 1"
        />
        <Post
          date={new Date("6/12/2026")}
          description="You learn basic HTML and are able to post your very own website"
          title="Reason 2"
        />
        <img src="https://img.pikbest.com/wp/202405/sleek-black-computer-blending-seamlessly-into-a-dark-background-3d-render_9839891.jpg!sw800" alt="https://img.pikbest.com/wp/202405/sleek-black-computer-blending-seamlessly-into-a-dark-background-3d-render_9839891.jpg!sw800" />
        
      </div>
    </div>
  );
}
