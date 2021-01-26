import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  customTextFld: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    fontSize: '2rem',
    border:'none',
    borderBottom:'1px solid black',
    outline: 'none'
  }
}));

const renderField = ({
  input,
  label,
  type,
  placeholder,
  className,
  meta: { touched, error, warning }
}) => (
  <div>
    {
      !!label && <label>{label}</label>
    }
    <div>
      <input required {...input} placeholder={placeholder} type={type} className={className}/>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

// Redux SearchForm 
const SearchForm = (props) => {
  const classes = useStyles();
  const { handleSubmit, isSubmitting} = props
  return (
    <form onSubmit={handleSubmit}>
       <Grid container spacing={3}  alignItems="center" justify="center">
          <Grid item xs={10}>
              <Field
                name="searchQuery"
                type="text"
                component={renderField}
                label=""
                placeholder="Type in Repository Name"
                className = {classes.customTextFld}
              />
          </Grid>
          <Grid item xs={2}>
              <Button variant="contained" 
                  color="primary" type="submit" 
                  className="margin3" disabled={isSubmitting}>
                Submit
              </Button>
          </Grid>
      </Grid>
    </form>
  )
}

export default reduxForm({
  form: 'searchForm'
})(SearchForm)