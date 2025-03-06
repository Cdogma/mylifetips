import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "../UI/SectionHeading";
import { TabItem } from '../Lifestyle/CategoryTabs';

interface GesundheitTabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}

const GesundheitTabs: React.FC<GesundheitTabsProps> = ({ tabs, defaultValue }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title="Deine Gesundheit im Fokus"
          description="Entdecke vielfältige Aspekte für ein gesundes und erfülltes Leben."
        />

        <Tabs defaultValue={defaultValue || tabs[0].value} className="w-full mt-8">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{tab.title}</h3>
                  <div>{tab.content}</div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GesundheitTabs;
