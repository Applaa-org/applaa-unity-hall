import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Our Activities & Services</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p>This is the Services page. Content will be added here shortly.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Services;