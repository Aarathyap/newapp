import React from 'react'

const Displaycard = () => {
  return (
    <>
    <h1>Axios Cards</h1>
      <Grid container spacing={2}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              component={Paper}
              elevation={3}
              sx={{
                backgroundColor: user.gender === "male" ? "#ffcccc" : "#ccffcc",
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> {user.email}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold" }}
                >
                  <strong>Gender:</strong> {user.gender}
                </Typography>
                <Typography variant="body2">
                  <strong>Phone:</strong> {user.phone}
                </Typography>
                <Typography variant="body2">
                  <strong>Address:</strong> {user.address.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Displaycard