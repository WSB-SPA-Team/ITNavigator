import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function CreatingCV() {
  return (
      <div className="flex flex-col items-center justify-center w-3/4 my-5">
        <h1 className="text-3xl font-bold mb-6">How to create a resume?</h1>
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle>Step 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Step 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </CardContent>
        </Card>
      </div>
  );
}

export default CreatingCV;
