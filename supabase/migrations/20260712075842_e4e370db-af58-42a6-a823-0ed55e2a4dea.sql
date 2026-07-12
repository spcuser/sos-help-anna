
CREATE TABLE public.email_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  nombre TEXT,
  lang TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.email_subscribers TO anon, authenticated;
GRANT ALL ON public.email_subscribers TO service_role;

ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.email_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
