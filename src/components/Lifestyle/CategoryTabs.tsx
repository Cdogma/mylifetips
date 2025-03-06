
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export interface TabItem {
  value: string;
  label: string;
  title: string;
  content: React.ReactNode;
}

interface CategoryTabsProps {
  tabs: TabItem[];
  defaultValue?: string;
}

const CategoryTabs = ({ tabs, defaultValue }: CategoryTabsProps) => {
  return (
    <Tabs defaultValue={defaultValue || tabs[0].value} className="w-full max-w-4xl mx-auto">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
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
              <div className="space-y-4">
                {tab.content}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
