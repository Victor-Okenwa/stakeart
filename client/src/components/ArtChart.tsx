"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
  { month: "January", price: 186 },
  { month: "February", price: 305 },
  { month: "March", price: 237 },
  { month: "April", price: 73 },
  { month: "May", price: 209 },
  { month: "June", price: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ArtChart = ({ numberOfAuctions, numberOfOwners }: ArtChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Art auction participation</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false}  />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={1}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ChartContainer>

        <CardFooter className="flex flex-col pb-0 px-0 pt-2 items-start">
          <div className="flex justify-between gap-2 text-sm w-full">
            <b>Participation:</b> {numberOfAuctions}
          </div>
          <div className="flex justify-between gap-2 text-sm w-full">
            <b>Owners:</b> {numberOfOwners}
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
export default ArtChart;
