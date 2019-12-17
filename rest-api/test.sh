
URL=http://localhost:3000/accounts

# GET
curl $URL

# POST accounts data
curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name": "checking"}' $URL
# verify POST
curl $URL

# PUT (update) accounts data
curl -H "Content-Type: application/json" -X PUT -d '{"balance": 200, "name": "savings"}' $URL/0

# DELETE accounts data
curl -X DELETE $URL/0
curl $URL

