import {createClient} from '@supabase/supabase-js';


const apiUrl = "https://ohjjazxgygwvlsqbjavm.supabase.co";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oamphenhneWd3dmxzcWJqYXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNTc2MjgsImV4cCI6MjA1ODkzMzYyOH0.IQf3D6q9Gq-i9m_PdqzEbtBj3GTKuIo1aaeQmsVqg9k";

export const supabase = createClient(apiUrl , apiKey);

