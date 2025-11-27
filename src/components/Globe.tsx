import { onMount, onCleanup } from "solid-js";
import * as d3 from "d3";
import worldData from "../lib/world.json";

interface GlobeProps {
  scale?: number; // Allow custom scale
}

const GlobeComponent = (props: GlobeProps) => {
  let mapContainer: HTMLDivElement | undefined;
  let timer: d3.Timer | undefined;

  const visitedCountries = [
    "Bangladesh",
    "Canada",
    "USA",
    "Switzerland",
    "Morocco",
    "Turkey",
    "Portugal",
    "United Arab Emirates"
  ];

  onMount(() => {
    if (!mapContainer) return;

    const updateGlobe = () => {
      // Clear existing SVG if it exists
      d3.select(mapContainer).select("svg").remove();

      const width = mapContainer.clientWidth;
      const height = mapContainer.clientHeight;
      
      // Use custom scale if provided, otherwise calculate responsive scale
      const baseScale = props.scale 
        ? props.scale 
        : Math.min(width, height) * 0.4;
      
      const sensitivity = 75;

      let projection = d3
        .geoOrthographic()
        .scale(baseScale)
        .center([0, 0])
        .rotate([0, -30])
        .translate([width / 2, height / 2]);

      const initialScale = projection.scale();
      let pathGenerator = d3.geoPath().projection(projection);

      let svg = d3
        .select(mapContainer)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      svg
        .append("circle")
        .attr("fill", "#EEE")
        .attr("stroke", "#000")
        .attr("stroke-width", "0.2")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", initialScale);

      let map = svg.append("g");

      map
        .append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(worldData.features)
        .enter()
        .append("path")
        .attr("d", (d: any) => pathGenerator(d as any))
        .attr("fill", (d: { properties: { name: string } }) =>
          visitedCountries.includes(d.properties.name) ? "#E63946" : "white"
        )
        .style("stroke", "black")
        .style("stroke-width", 0.3)
        .style("opacity", 0.8);

      // Stop existing timer if any
      if (timer) {
        timer.stop();
      }

      timer = d3.timer(() => {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([rotate[0] - 1 * k, rotate[1]]);
        svg.selectAll("path").attr("d", (d: any) => pathGenerator(d as any));
      }, 200);
    };

    // Initial render
    updateGlobe();

    // Debounced resize handler
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateGlobe();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
      if (timer) {
        timer.stop();
      }
      clearTimeout(resizeTimeout);
    });
  });

  return (
    <div class="flex flex-col text-white justify-center items-center w-full h-full">
      <div class="w-full h-full" ref={mapContainer}></div>
    </div>
  );
};

export default GlobeComponent;