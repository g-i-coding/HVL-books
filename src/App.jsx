import { useState, useEffect } from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Header, { Title, Body } from './components/Header';
import { Book as BookCard } from './components/Cards';
import { DecoratedList } from './components/Lists';
import { Image } from './components/Image';
import { CreateBookForm } from './components/Form';
// import Books from './utils/Books.example';
import axios from 'axios';

export const App = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GATEWAY_URI}/${process.env.REACT_APP_GATEWAY_RESOURCE}`
      )
      .then((res) => {
        console.log(res);
        setBooks(res.data.Items ?? []);
      });
  }, []);

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item>
          {/* Please change the header title or body text to whatever you wish */}
          <Header>
            <Title>High Velocity Learning Books</Title>
            <Body>
              Books delivered to you through the power of serverless computing!
            </Body>
          </Header>
        </Grid>
      </Grid>
      <Grid container justifyContent='center' sx={{ margin: '30px 0px' }}>
        <Grid item>
          <Card sx={{ padding: '20px' }}>
            <CreateBookForm setBooks={setBooks} />
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent='center'
        spacing={2}
        sx={{ padding: '5em 0' }}
      >
        {Books?.length > 0 ? (
          Books?.map((Book) => {
            return (
              <Grid item>
                <BookCard>
                  <BookCard.Title
                    title={Book.title || ''}
                    subheader={
                      <DecoratedList>
                        {/* {!!Book.releaseYear ? (
                          <DecoratedList.Item>
                            {Book.releaseYear}
                          </DecoratedList.Item>
                        ) : null} */}
                        {!!Book.bookRating ? (
                          <DecoratedList.Item decorated>
                            {Book.bookRating}
                          </DecoratedList.Item>
                        ) : null}
                        {!!Book.runTime ? (
                          <DecoratedList.Item decorated>
                            {Book.runTime}
                          </DecoratedList.Item>
                        ) : null}
                      </DecoratedList>
                    }
                  />
                  <BookCard.Body>
                    <Grid container>
                      <Grid item xs={10} sx={{ padding: '0px 5px 0px 0px' }}>
                        <Grid container direction='column' spacing='1em'>
                          <BookCard.Description>
                            <Typography>{Book.description || ''}</Typography>
                          </BookCard.Description>
                          <BookCard.Description>
                            <hr />
                            <DecoratedList>
                              <DecoratedList.Item>
                                <strong>
                                  {Book?.authors?.length > 1 ||
                                  typeof Book.author != 'string'
                                    ? 'authors'
                                    : 'author'}
                                </strong>
                              </DecoratedList.Item>
                              {typeof Book.author == 'string' ? (
                                <DecoratedList.Item>
                                  {Book.author}
                                </DecoratedList.Item>
                              ) : (
                                Book?.authors?.map((author, index) => {
                                  return (
                                    <DecoratedList.Item decorated={index !== 0}>
                                      {author}
                                    </DecoratedList.Item>
                                  );
                                })
                              )}
                            </DecoratedList>
                          </BookCard.Description>
                          <BookCard.Description>
                            <hr />
                            {/* <DecoratedList>
                              <DecoratedList.Item>
                                <strong>
                                  {Book?.writers?.length > 1
                                    ? 'Writers'
                                    : 'Writer'}
                                </strong>
                              </DecoratedList.Item>
                              {Book?.writers?.map((writer, index) => {
                                return Book?.writers[index] ? (
                                  <DecoratedList.Item decorated={index !== 0}>
                                    {writer}
                                  </DecoratedList.Item>
                                ) : null;
                              })}
                            </DecoratedList> */}
                          </BookCard.Description>
                          <BookCard.Description>
                            <hr />
                            <DecoratedList>
                              <DecoratedList.Item>
                                <strong>
                                  {Book?.actors?.length > 1
                                    ? 'Actors'
                                    : 'Actor'}
                                </strong>
                              </DecoratedList.Item>
                              {Book?.actors?.map((actor, index) => {
                                return (
                                  <DecoratedList.Item decorated={index !== 0}>
                                    {actor}
                                  </DecoratedList.Item>
                                );
                              })}
                            </DecoratedList>
                          </BookCard.Description>
                        </Grid>
                      </Grid>
                      {!!Book.imageURL ? (
                        <Grid item xs={2}>
                          <Image src={Book.imageURL} width='100%' />
                        </Grid>
                      ) : null}
                    </Grid>
                  </BookCard.Body>
                </BookCard>
              </Grid>
            );
          })
        ) : (
          <BookCard>
            <Grid container justifyContent='center' textAlign='center'>
              <Grid item sx={{ padding: '24px 5px 0px 0px' }}>
                <BookCard.Body>
                  <BookCard.Description>
                    <Typography sx={{ maxWidth: '42vw', minWidth: '42vw' }}>
                      Your DynamoDB table is currently empty! If you'd like to
                      add a Book, ensure that your Lambdas and API Gateway have
                      been properly configured and their respective endpoints
                      have been added to the .env file. Once you've done that,
                      use the form below to add any Books to your DynamoDB
                      table!
                    </Typography>
                  </BookCard.Description>
                </BookCard.Body>
              </Grid>
            </Grid>
          </BookCard>
        )}
      </Grid>
    </>
  );
};
