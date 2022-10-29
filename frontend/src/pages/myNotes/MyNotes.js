import React from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import notes from '../../data/notes'

const MyNotes = () => {
  const deleteHandler = id => {
    if (window.confirm('Are you sure u want to delete the note ?')) {
    }
  }

  return (
    <div>
      <MainScreen title='Welcome Back..'>
        <Link to='createnote'>
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
            Create New Note
          </Button>
        </Link>

        {notes.map(note => (
          <Accordion>
            <Card className='m-2'>
              <Card.Header className='d-flex'>
                <span
                  style={{
                    color: '#000',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant='link' eventKey='0'>
                    {note.title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Link to={`/note/${note._id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button
                    variant='danger'
                    className='mx-2'
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <h4>
                    <Badge variant='success'>Category - {note.category}</Badge>
                  </h4>
                  <blockquote className='blockquote mb-0'>
                    <p>{note.content}</p>
                    <footer className='blockquote-footer'>
                      Created At - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  )
}

export default MyNotes
