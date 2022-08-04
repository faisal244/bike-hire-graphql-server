# bike-hire-graphql-server

## Queries

Query all bikes

```graphql
query BikesQuery {
	bikes {
		category
		model
		brand
		imageUrl
		dailyPrice
		weeklyPrice
		specifications {
			frameSize
			wheelSize
			colour
			hasGears
			numberOfGears
		}
	}
}
```

Query a single bike

```graphql
query Bike($bikeId: ID!) {
	bike(bikeId: $bikeId) {
		category
		model
		brand
		imageUrl
		dailyPrice
		weeklyPrice
		specifications {
			frameSize
			wheelSize
			colour
			hasGears
			numberOfGears
		}
	}
}
```

variables

```json
{
	"bikeId": "62e2ed9062f193d32127cbd1"
}
```
