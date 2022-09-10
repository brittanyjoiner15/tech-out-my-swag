import { Badge, Grid, Card, Stack } from "@shopify/polaris";

import React from "react";

export default function Swag(props) {
  return (
    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
      <Card>
        <Card.Section>
          <img alt={props.title} src={props.image} />
          <Stack horizontal>
            <Badge status="success">{props.company}</Badge>
            <Badge status="info">{props.type}</Badge>
          </Stack>
        </Card.Section>
      </Card>
    </Grid.Cell>
  );
}
