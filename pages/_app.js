import "../styles/global.css";
import "@shopify/polaris/build/esm/styles.css";
import {
  AppProvider,
  Page,
  OptionList,
  Grid,
  TextField,
  CalloutCard,
  Text,
  FooterHelp,
  Link,
} from "@shopify/polaris";
import Swag from "../components/swag";
import { useState, useCallback, useEffect } from "react";
import data from "../data/mySwag.json";

export default function App({}) {
  const [selectedSwagType, setSelectedSwagType] = useState("all");
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  function updateFilter(swagType, company) {
    if (swagType === "all") {
      setFilteredData(
        company
          ? data.filter((item) => item.company.toLowerCase() === company)
          : data
      );
    } else {
      setFilteredData(
        company
          ? data.filter(
              (item) =>
                item.type === swagType && item.company.toLowerCase() === company
            )
          : data.filter((item) => item.type === swagType)
      );
    }
  }

  function updateSearchTerm(input) {
    setSearchTerm(input.toLowerCase());
    updateFilter(selectedSwagType, input);
  }

  function updateSwagType(swagType) {
    console.log(swagType);
    setSelectedSwagType(swagType);
    updateFilter(swagType, searchTerm);
  }

  function displaySwag() {
    if (filteredData.length > 0) {
      console.log(filteredData[0].type);
      const swagCards = filteredData.map((item) => (
        <Swag
          title={item.title}
          company={item.company}
          type={item.type}
          image={item.image}
        />
      ));
      return <Grid>{swagCards}</Grid>;
    } else {
      return (
        <CalloutCard
          title="I don't have this swag!"
          illustration="./images/twitter-logo-png.png"
          primaryAction={{
            content: "Send me some!",
            url: "https://twitter.com/britt_joiner",
            external: true,
          }}
        >
          <p>DM Me on Twitter if you want to send me some!</p>
        </CalloutCard>
      );
    }
  }

  return (
    <AppProvider>
      <Page fullWidth>
        <Text
          alignment="center"
          fontWeight="bold"
          as="h1"
          variant="heading2xl"
          color="success"
        >
          Tech Out My Swag!
        </Text>
        <br />
        <Text alignment="center" variant="headingMd">
          I love collecting swag from various companies, especially tech ones.
          Here are some of my favorites from my collection!
        </Text>
        <br />
        <TextField
          clearButton
          onClearButtonClick={() => updateSearchTerm("")}
          label="Search by company"
          value={searchTerm}
          onChange={(e) => {
            updateSearchTerm(e);
          }}
        />

        <br />
        <Grid>
          <Grid.Cell columnSpan={{ sm: 6, md: 3, lg: 3, xl: 3 }}>
            <OptionList
              title="Filter swag by"
              onChange={(e) => {
                updateSwagType(e[0]);
              }}
              options={[
                { value: "all", label: "Show All" },
                { value: "hats", label: "Hats" },
                { value: "shirts", label: "Shirts" },
                { value: "sweatpants", label: "Sweatpants" },
                { value: "socks", label: "Socks" },
                { value: "backpacks", label: "Backpacks" },
                { value: "pins", label: "Pins" },
              ]}
              selected={selectedSwagType}
            />
          </Grid.Cell>
          <Grid.Cell columnSpan={{ sm: 6, md: 9, lg: 9, xl: 9 }}>
            {displaySwag()}
          </Grid.Cell>
        </Grid>
        <FooterHelp>
          Built by{" "}
          <Link url="https://github.com/brittanyjoiner15" external>
            Polaris
          </Link>{" "}
          with Polaris, Next.JS, and ...
        </FooterHelp>
      </Page>
    </AppProvider>
  );
}
