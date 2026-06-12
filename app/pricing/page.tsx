"use client";

import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { addToast } from "@heroui/toast";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>Pricing</h1>

      <p>Pricing? Boring!</p>
      <p>Info? Nice!</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2L_eqqTBW_Xz6xJ6TrJnExM3TGCDDfBEzQ&s" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2L_eqqTBW_Xz6xJ6TrJnExM3TGCDDfBEzQ&s" />

      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold">TAKE SOME FREE PLANS RAHH!</h2>
        <div className="flex justify-center gap-8 mt-20">
          {/* plan 1 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-primary">
                FREE <span className="text-sm">0$</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>♾️monthly orders</li>
                <li>♾️customer limit</li>
                <li>♾️Standard shipping</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="primary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                FREE²
              </Button>
            </CardFooter>
          </Card>

          {/* plan 2 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-secondary">
                FREE² <span className="text-sm">0$</span>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>♾️Unlimited monthly orders²</li>
                <li>♾️customer limit²</li>
                <li>♾️Standard + Express shipping²</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="secondary"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                FREE²
              </Button>
            </CardFooter>
          </Card>

          {/* plan 3 */}
          <Card className="p-6 w-1/3">
            <CardHeader>
              <div className="text-3xl text-center w-full font-extrabold text-success">
                FREE³
              </div>
            </CardHeader>
            <CardBody>
              <ul className="list-disc pl-5 text-xl">
                <li>Unlimited monthly orders³</li>
                <li>Unlimited customers³</li>
                <li>Custom shipping³</li>
              </ul>
            </CardBody>
            <CardFooter className="justify-center">
              <Button
                color="success"
                radius="full"
                onPress={() => {
                  thisDoesNothingToast();
                }}
              >
                FREE³
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">FAQ</h2>
        <Accordion>
          <AccordionItem key={1} title="What did we learn">
            How to create and depoloy basic websites while programing with basic HTML and trouble shooting
          </AccordionItem>
          <AccordionItem
            key={2}
            title="How was the class"
          >
            Students learned basic programing and was super interactive and fun!
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
